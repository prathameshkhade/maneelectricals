export default function Card({ feature, index }) {
    return (
        <div 
            key={index}
            style={{ outlineColor: feature.color }} 
            className="bg-white/15  w-[30vw] rounded-[3vw] py-10 px-8 flex flex-col gap-6 outline-2"
        >
            <div className="w-16 h-16 bg-white/50 flex items-center p-3 rounded-[2vw]">
                <feature.icon width={60} height={60} />
            </div>
            <p className="text-[2.5vw] font-bold">{feature.title}</p>
            <p className="text-[1.3vw]">{feature.description}</p>
        </div>
    );
}