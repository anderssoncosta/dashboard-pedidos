import { Card, CardContent, CardTitle } from "../@/components/ui/card";

interface CardDashProps {
  borderColor: string;
  titleCard: string;
  contentCard: string;
}

const CardDash = ({ borderColor, contentCard, titleCard }: CardDashProps) => {
  return (
    <div className="">
      <Card
        className={`flex flex-col justify-end p-5 rounded-none border-0 border-l-8 ${borderColor}`}
      >
        <CardTitle className="text-gray-500">{titleCard}</CardTitle>
        <CardContent className="px-0 mt-4">
          <h1 className="text-4xl">{contentCard}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDash;
