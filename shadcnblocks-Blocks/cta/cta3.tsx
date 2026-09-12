import { ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Card } from "@/components/ui/card";

export const branches = [
  { id: "branch-pangkalanbun", title: "Pangkalanbun" },
  { id: "branch-sampit", title: "Sampit" },
];

const Cta3 = () => {
  return (
    <section id="cabang" className="py-32">
      <div className="container">
        
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <div className="text-center">
            <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
              HUBUNGI KAMI
            </h1>
            <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
              Pilih cabang terdekat untuk konsultasi layanan atau jadwalkan kunjungan ke bengkel kami. Tim kami siap membantu Anda dengan layanan terbaik.
            </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="#branch-pangkalanbun">
              <Card id="branch-pangkalanbun" className="hover:bg-accent flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none">
                <div className="flex items-start gap-2">
                  <FaWhatsapp aria-hidden="true" className="size-5 text-[#25D366]" />
                  <div>
                    <h5 className="mx-auto max-w-3xl text-balance text-xl font-medium">
                      Pangkalanbun
                    </h5>
                    <p className="text-muted-foreground text-sm">
                      WhatsApp Sekarang
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#branch-sampit">
              <Card id="branch-sampit" className="hover:bg-accent flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none">
                <div className="flex items-start gap-2">
                  <FaWhatsapp aria-hidden="true" className="size-5 text-[#25D366]" />
                  <div>
                    <h5 className="mx-auto max-w-3xl text-balance text-xl font-medium">
                      Sampit
                    </h5>
                    <p className="text-muted-foreground text-sm">
                      WhatsApp Sekarang
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };
