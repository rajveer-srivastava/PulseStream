import { currentUser } from "@clerk/nextjs/server";
import { getUserByUsername } from "@/lib/user-service";
import { StreamPLayer } from "@/components/stream-player";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <StreamPLayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default CreatorPage;
