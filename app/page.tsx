import { Button } from "@/components/ui/button";
import db from "./lib/db";

export default async function Home() {
  const user = await db.user.findFirst({});

  return (
    <div>
      <h1>Meal Planner</h1>
      <p>{JSON.stringify(user)}</p>
      <Button>Submit</Button>
    </div>
  );
}
