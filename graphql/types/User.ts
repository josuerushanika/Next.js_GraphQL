import { objectType } from "nexus";
import { Link } from "./Link";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.list.field("bookmarks", {
      type: Link,
      async resolve(parent, _args, ctx) {
        // Include 'bookmarks' in the selection
        const user = await ctx.prisma.user.findUnique({
          where: {
            id: parent.id,
          },
          include: {
            bookmarks: true,
          },
        });

        // Access 'bookmarks' from the included selection
        return user?.bookmarks;
      },
    });
  },
});

