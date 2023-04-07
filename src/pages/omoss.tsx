import Image from "next/image";
import React from "react";

const OmOss: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Välkommen till Vårt kafé
      </h2>
      <p className="mb-4">
        Beläget i hjärtat av Norrtälje, är Vårt kafé ett unikt kafé som erbjuder
        exceptionellt kaffe, läckra bakverk och en välkomnande atmosfär. Sedan
        vår start har vi varit dedikerade till att erbjuda våra gäster en plats
        att koppla av, umgås och njuta av livets enkla nöjen.
      </p>
      <p className="mb-4">
        Vår kärlek till kaffe speglas i vårt noggranna urval av högkvalitativa
        bönor och vår expertis inom bryggning. Vi har också ett brett utbud av
        teer, smaksatta drycker och hembakade godsaker som är perfekta för att
        stilla sötsuget.
      </p>
      <p className="mb-4">
        På vår charmiga uteplats kan du njuta av solen under de varma månaderna,
        eller sitta under våra värmande filtar när det är lite kyligare. Inomhus
        erbjuder vi en charmig och rustik atmosfär med bekväma sittplatser och
        utsmyckning som reflekterar vår passion för både kaffe och gemenskap.
      </p>
      <p className="mb-4">
        Vi på Vårt kafé värdesätter våra gästers upplevelse och strävar efter
        att skapa en personlig koppling till var och en av er. Vårt engagerade
        team består av kunniga baristor och vänliga servitörer som är mer än
        glada att hjälpa dig att välja den perfekta kaffebryggan eller ge
        rekommendationer baserat på dina smakpreferenser.
      </p>
      <p className="mb-4">
        Utöver vårt utbud av drycker och bakverk erbjuder vi även frukost, lunch
        och brunch med ett brett utbud av hälsosamma och vällagade rätter. Vi
        erbjuder även veganska och glutenfria alternativ för att se till att
        alla våra gäster kan njuta av våra kulinariska skapelser.
      </p>
      <p className="mb-4">
        Hos Vårt kafé är alla välkomna, och vi ser fram emot att bli din nya
        favoritplats för att koppla av, umgås och njuta av god mat och dryck.
        Besök oss snart och upptäck själv varför vi är mer än bara ett kafé – vi
        är en destination för gemenskap, kvalitet och smakupplevelser! <br />
        <p className="text-lg">välkommna! Mvh Einar</p>
      </p>
      {/* Add a placeholder for an image, adjust the width and height as needed */}
      <div className="mt-8 mb-4">
        <Image
          src="/img/cafe01.jpg"
          alt="Kaféets bild"
          width={800}
          height={600}
          className="w-full h-auto md:w-1/2 md:h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default OmOss;
