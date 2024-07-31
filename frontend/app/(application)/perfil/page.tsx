"use client";

import InputFileLogo from "@/components/profile/inputs/FileLogo";
import InputIncrementalNumber from "@/components/profile/inputs/IncrementalNumber";

function ProfilePage() {
  const handleLogo = (file: File) => {
    console.log(file)
  }

  return (
    <main>
      <h1>Profile</h1>
      <InputFileLogo src="http://localhost:3000/favicon.ico" onChange={handleLogo} />
      <InputIncrementalNumber valueModifier={500} />
    </main>
  );
}

export default ProfilePage;