import Card from "../atoms/Card";
import { cards } from "@/utils/ProjectInfo";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* To change the project details, please go to: utils/ProjectInfo.ts */}
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            href={card.href}
            src={card.src}
            alt={card.alt}
            title={card.title}
            desc={card.desc}
          />
        );
      })}
    </div>
  );
}
