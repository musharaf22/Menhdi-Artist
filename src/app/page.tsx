import MehndiArtistWebsite from "@/components/Demo";
import WhatsAppFloating from "@/components/WhatsappFloating";

export default function Home() {
  return (
    <>
      <MehndiArtistWebsite />
      <WhatsAppFloating
        phone="916287054190"
        message="Hi, I'm interested in your mehndi services. Please share availability."
      />
    </>
  );
}
