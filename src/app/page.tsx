import MehndiArtistWebsite from "@/components/Demo";
import WhatsAppFloating from "@/components/WhatsappFloating";

export default function Home() {
  return (
    <>
      <MehndiArtistWebsite />
      <WhatsAppFloating
        phone="919876543210"
        message="Hi, I'm interested in your mehndi services. Please share availability."
      />
    </>
  );
}
