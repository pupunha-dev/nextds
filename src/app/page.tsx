import Image from "next/image";
import logo from "@/public/NextDS Logo 1.svg";

export default function Home() {
  return (
    <main className="flex size-full min-h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src={logo} width={100} height={100} alt=""></Image>
        <p className="text-white">Em breve o novo site da NextDS saindo...</p>
        <button className="btn btn-accent">
          <span className="text-white">Entrar em contato</span>
        </button>
      </div>
    </main>
  );
}

// rota dinamica []

// interface DocumentIdPageProps {
//   params: Promise<{documentId: string}>
// }

// const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
//    const {documentId} = await params;
//    return(
//        <div className="min-h-screen bg-[#FAFBFD]">
//            {documentId}
//        </div>
//    )
// }

// export default DocumentIdPage;
