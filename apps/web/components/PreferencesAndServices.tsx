import type { HunqzSexual, HunqzService } from "@repo/shared";
import { CollapsibleSection } from "./CollapsibleSection";

interface PreferencesAndServicesProps {
  sexual?: HunqzSexual;
  service?: HunqzService;
}

export function PreferencesAndServices({ sexual, service }: PreferencesAndServicesProps) {
  if (!sexual && !service) return null;

  const preferences = sexual?.enabled ? [
    { label: "Favored Position", value: sexual.favored_position },
    { label: "Anal Position", value: sexual.anal_position },
    { label: "Size", value: sexual.dick_size },
    { label: "Dirty Sex", value: sexual.dirty_sex },
    { label: "SM", value: sexual.sm },
    { label: "Fisting", value: sexual.fisting },
    { label: "Safer Sex", value: sexual.safer_sex },
    { label: "Kissing", value: sexual.kissing },
    { label: "Oral", value: sexual.oral },
  ].filter(item => item.value && item.value !== "N/A") : [];

  return (
    <div className="space-y-4 sm:space-y-8 sm:rounded-2xl sm:bg-surface sm:p-8 sm:shadow-sm sm:ring-1 sm:ring-outline/20">
      <CollapsibleSection title="Preferences & Services">
        <div className="space-y-8">
          {/* Sexual Preferences Part */}
          {sexual?.enabled && (
            <div>
              <h3 className="hidden sm:block mb-4 text-sm font-semibold uppercase tracking-wider text-outline">
                Sexual Preferences
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {preferences.map((item, idx) => (
                  <div key={idx} className="flex flex-col rounded-xl bg-surface-variant/50 p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-outline">
                      {item.label}
                    </span>
                    <span className="mt-1 text-base font-bold text-on-surface">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Part */}
          {service && (
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
          )}
        </div>
      </CollapsibleSection>
    </div>
  );
}
