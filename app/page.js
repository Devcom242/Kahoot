import Explorer from "@/components/button/explorer";
import Image from "next/image";

export default function Home () {

    return (
      <>
        <div className="w-full min-h-[calc(100vh-150px)] relative">
          <div className="w-1/2 h-full absolute left-[50%] -translate-x-[50%] flex flex-col justify-center items-center">
            <p className="text-center text-[50px] mb-[15px]">Des centaines de Quiz</p>
            <p className="text-[#7D0763] text-center text-[50px] mb-[10px]">Prêt à jouer</p>
            <p className="text-center text-[35px] mb-[30px]">Découvrez une bibliothèque riche de plus de cent quiz prêts à jouer, créés par notre communauté. Des casse-têtes aux quiz de culture générale, en passant par des défis variés, il y en a pour tous les goûts !</p>
            <Explorer/>
          </div>
          <div className="absolute h-[250px] w-[250px] right-[-75px] top-[80px]">
            <Image
              src='/images/acceuil/Component.png'
              alt="logo1"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] right-[320px] top-[-50px]">
            <Image
              src='/images/acceuil/crow-dynamic-color.png'
              alt="logo2"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] left-[300px] bottom-[-140px]">
            <Image
              src='/images/acceuil/Cylinder 2.png'
              alt="logo3"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] right-[150px] bottom-[50px]">
            <Image
              src='/images/acceuil/explorer-dynamic-colorx.png'
              alt="logo4"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] left-[70px] top-[100px]">
            <Image
              src='/images/acceuil/fire-dynamic-color.png'
              alt="logo5"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] left-[100px] bottom-[100px]">
            <Image
              src='/images/acceuil/Helix.png'
              alt="logo6"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] right-[450px] bottom-[-80px]">
            <Image
              src='/images/acceuil/rocket-dynamic-color.png'
              alt="logo7"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[200px] w-[200px] left-[350px] top-[10px]">
            <Image
              src='/images/acceuil/Spheres 1.png'
              alt="logo8"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] left-[50%] -translate-x-[50%] top-[-150px]">
            <Image
              src='/images/acceuil/Thorus 1.png'
              alt="logo9"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </>
    )
}