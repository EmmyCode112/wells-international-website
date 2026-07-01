import React from 'react';
import { Icon } from './Icon';

export const SchoolMap: React.FC = () => {
  const lat = 4.77034;
  const lng = 7.92678;
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=m&z=15&iwloc=A&output=embed`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 grid grid-cols-1 lg:grid-cols-3">
      {/* Map Embed Column */}
      <div className="lg:col-span-2 h-[350px] lg:h-[450px] relative w-full bg-slate-50">
        <iframe
          title="Wells International Schools Location Map"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

      {/* Campus Info Panel */}
      <div className="p-8 bg-brand-primary text-white flex flex-col justify-between relative overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary opacity-15 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-secondary opacity-10 rounded-full blur-lg"></div>

        <div className="space-y-6 relative z-10">
          <div>
            <span className="text-xs font-semibold text-brand-secondary tracking-widest uppercase block mb-1">
              Campus Location
            </span>
            <h4 className="text-2xl font-display font-medium">Find Wells International</h4>
          </div>

          <p className="text-slate-350 text-sm leading-relaxed">
            Our premium, technology-integrated sanctuary is located in an elite, safe, serene seaside academic environment, specifically mapped for secure accessibility.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/10 shrink-0 rounded-xl flex items-center justify-center text-brand-secondary">
                <Icon name="MapPin" size={18} />
              </div>
              <div>
                <span className="block text-xs text-slate-350 font-medium">OFFICIAL ADDRESS</span>
                <span className="text-sm font-semibold text-white">
                  12 Wells International Avenue, Beachside Academic Estate, Port Harcourt Sub-District
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/10 shrink-0 rounded-xl flex items-center justify-center text-brand-secondary">
                <Icon name="Compass" size={18} />
              </div>
              <div>
                <span className="block text-xs text-slate-350 font-medium">GPS COORDINATES</span>
                <span className="text-sm font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded inline-block mt-1">
                  Latitude: 4.77034° N, Longitude: 7.92678° E
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions of the card */}
        <div className="pt-6 border-t border-white/10 mt-6 md:mt-0 relative z-10">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-brand-secondary hover:bg-brand-secondary/90 transition text-center font-medium rounded-xl text-sm inline-flex items-center justify-center gap-2"
          >
            <Icon name="Globe" size={14} />
            Get Precise Directions
          </a>
        </div>
      </div>
    </div>
  );
};
