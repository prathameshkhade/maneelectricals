import Bulb from "./components/common/Bulb";

export default function App() {

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Magenta neon bulb */}
      <Bulb 
        // ref={bulbRef}
        color="#FF10F0" 
        width={250} 
        height={250} 
        rotation={15} 
      />

      {/* Yellow neon bulb */}
      <Bulb 
        color="#FFFF00" 
        width={200} 
        height={200} 
        rotation={-20} 
      />

      {/* Cyan neon bulb */}
      <Bulb 
        color="#00FFFF" 
        width={180} 
        height={180} 
        rotation={0} 
      />
    </div>
  );
}