// import ButtonMore from "../buttons/ButtonMore";
// import InputTextarea from "./InputTextarea";
// import { useState } from "react";

// interface Instruction {
//   id: number;
//   description: string;
// }
// type Instructions = Instruction[];

// function Instructions() {
//   const [instructions, setInstructions] = useState<Instructions>([]);

//   function handleAddInstruction() {}

//   return (
//     <>
//        <InputTextarea
//         heading="Instructions"
//         onChange={(e) => setInstructions(e.target.value)}
//       />
//       <div className="description">
//         {instructions.map((instruction) => (
//           <div key={instruction.id}>
//             <p>Instruction: {instruction.description}</p>
//           </div>
//         ))}
//       </div>

//       <ButtonMore name="Instructions" onClick={handleAddInstruction} />
//     </>
//   );
// }

// export default Instructions;
