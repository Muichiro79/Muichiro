// import { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <>
//       {/* Custom Cursor Image */}
//       <img
//         src="https://aiproductions.vercel.app/assets/Ai%20Productions%20Icon.png" // Replace with your custom cursor image
//         // alt="Custom Cursor"
//         className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]"
//         style={{
//           transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
//         }}
//       />

//       {/* Background Light Effect */}
//       <div
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
//         style={{
//           background: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.2), transparent)`,
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;
