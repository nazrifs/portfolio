import React from "react";
import Image from "next/image";

interface ClientItemProps {
  src: string;
  alt: string;
  name: string;
}

const ClientItem: React.FC<ClientItemProps> = ({ src, alt, name }) => {
  return (
    <div className="marquee-item">
      <Image src={src} alt={alt} style={{width: "100%", height: "100%",}} />
      <span>{name}</span>
    </div>
  );
};

export default ClientItem;
