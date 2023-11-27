// import { useState } from "react";
// import InputTextarea from "./InputTextarea";
// import ButtonMore from "../buttons/ButtonMore";

// interface Instruction {
//   description: string;
// }

// interface InstructionsProps {
//   instructions: Instruction[];

// }
// function Instructions({ instructions, }: InstructionsProps) {
//   // State for instructions
//   const [instructions, setInstructions] = useState<Instruction[]>([]);
//   const [newInstruction, setNewInstruction] = useState<string>("");

//   // Function to add a new instruction
//   const handleAddInstruction = () => {
//     if (newInstruction.trim() !== "") {
//       const updatedInstructions: Instruction[] = [
//         ...instructions,
//         { description: newInstruction },
//       ];
//       setInstructions(updatedInstructions);
//       setNewInstruction(""); // Reset text area for a new instruction
//       console.log("Updated Instructions:", updatedInstructions);
//     }
//   };

//   return (
//     <section className="instructions">
//       <div className="description">
//         <h2>Instructions</h2>
//         <ul>
//           {instructions.map((instruction, index) => (
//             <li key={index}>
//               <p>{instruction.description}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <InputTextarea
//         heading=""
//         value={newInstruction}
//         onChange={(e) => setNewInstruction(e.target.value)}
//         placeholder=" ex: Pour the prepared filling into the pie crust."
//       />

//       <ButtonMore name="Add Instruction" onClick={handleAddInstruction} />
//     </section>
//   );
// }

// export default Instructions;
