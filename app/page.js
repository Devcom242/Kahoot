import GoButtun from "@/components/button/goButtun";

export default function Home () {

    return (
      <>
        <div className="absolute top-[150px] mx-auto w-1/2 h-full flex flex-col">
          <p className="text-center text-[60px]">Des centaines de Quiz</p>
          <p className="text-[#7D0763]">Prêt à jouer</p>
          <p>Découvrez une bibliothèque riche de plus de cent quiz prêts à jouer, créés par notre communauté. Des casse-têtes aux quiz de culture générale, en passant par des défis variés, il y en a pour tous les goûts !</p>
          <GoButtun/>
        </div>
      </>
    )
}