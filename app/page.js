import GoButtun from "@/components/button/goButtun";
import Image from "next/image";

export default function Home () {

    return (
      <>
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-1/2 flex flex-col gap-[7px]">
          <p className="text-center text-[50px]">Des centaines de Quiz</p>
          <p className="text-[#7D0763] text-center text-[50px]">Prêt à jouer</p>
          <p className="text-center text-[25px]">Découvrez une bibliothèque riche de plus de cent quiz prêts à jouer, créés par notre communauté. Des casse-têtes aux quiz de culture générale, en passant par des défis variés, il y en a pour tous les goûts !</p>
          <GoButtun/>
        </div>
        {/* <div className="absolute h-[200px] w-[200px] right-[-75px]">
          <Image
            src='/images/acceuil/Component.png'
            alt="logo1"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="absolute h-[250px] w-[250px] right-[150px] top-[10px]">
          <Image
            src='/images/acceuil/crow-dynamic-color.png'
            alt="logo2"
            fill
            className="object-cover"
          />
        </div>
        {/* <div className="absolute h-[200px] w-[200px] left-[200px] bottom-[-50px]">
          <Image
            src='/images/acceuil/Cylinder 2.png'
            alt="logo3"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="absolute h-[200px] w-[200px] right-[50px] bottom-[140px]">
          <Image
            src='/images/acceuil/explorer-dynamic-colorx.png'
            alt="logo4"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[200px] w-[200px] left-[70px] top-[100px]">
          <Image
            src='/images/acceuil/fire-dynamic-color.png'
            alt="logo5"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[300px] w-[200px] left-[20px] bottom-[100px]">
          <Image
            src='/images/acceuil/Helix.png'
            alt="logo6"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[200px] w-[200px] right-[350px] bottom-[0px]">
          <Image
            src='/images/acceuil/rocket-dynamic-color.png'
            alt="logo7"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[200px] w-[200px] left-[280px] top-[10px]">
          <Image
            src='/images/acceuil/Spheres 1.png'
            alt="logo8"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[250px] w-[250px] left-[550px] top-[-100px]">
          <Image
            src='/images/acceuil/Thorus 1.png'
            alt="logo9"
            fill
            className="object-cover"
          />
        </div>
      </>
    )
}