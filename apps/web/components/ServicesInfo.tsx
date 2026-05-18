import type { HunqzService } from "@repo/shared";

interface ServicesInfoProps {
  service?: HunqzService;
}

export function ServicesInfo({ service }: ServicesInfoProps) {
  if (!service) return null;

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 sm:p-8">
      <h2 className="mb-6 font-headline text-xl font-bold text-on-surface">Services & Rates</h2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-outline">
              Rates
            </h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-surface-variant/50 p-4">
                <span className="font-medium text-on-surface-variant">Hourly Rate</span>
                <span className="text-xl font-bold text-on-surface">
                  {service.rate_hour} {service.currency}/hr
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-surface-variant/50 p-4">
                <span className="font-medium text-on-surface-variant">Night Rate</span>
                <span className="text-xl font-bold text-on-surface">
                  {service.rate_night} {service.currency}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-outline">
              Locations
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.service_locations.map((loc, idx) => (
                <span key={idx} className="inline-flex items-center rounded-lg bg-surface-variant px-3 py-1 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined mr-1 text-base">home</span>
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-outline">
            Offerings
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {service.service_offerings.map((offering, idx) => (
              <div key={idx} className="flex items-center text-on-surface-variant">
                <span className="material-symbols-outlined mr-2 text-primary text-lg">check_circle</span>
                <span className="text-sm">{offering}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
