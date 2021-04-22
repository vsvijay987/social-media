import { Message, Button } from "semantic-ui-react";

export const NoProfilePosts = () => (
  <>
    <Message info icon="meh" header="Sorry" content="User has not posted anything yet!" />
    <Button icon="long arrow alternate left" content="Go Back" as="a" href="/" />
  </>
);

export const NoFollowData = ({
  profileName,
  followersComponent = true,
  followingComponent = true
}) => (
  <>
    {followersComponent && (
      <Message
        icon="user outline"
        info
        content={`${profileName.split(" ")[0] + " does not have followers"}`}
      />
    )}

    {followingComponent && (
      <Message
        icon="user outline"
        info
        content={`${profileName.split(" ")[0] + " does not follow any users"}`}
      />
    )}
  </>
);

export const NoMessages = () => (
  <Message
    info
    icon="telegram plane"
    header="Sorry"
    content="You have not messaged anyone yet.Search above to message someone!"
  />
);

export const NoPosts = () => (
  <Message
    info
    icon="meh"
    header="Hey!"
    content="No Posts. Make sure you have followed someone."
  />
);
