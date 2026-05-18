import type { HunqzSexual } from "@repo/shared";

interface SexualPreferencesProps {
  sexual?: HunqzSexual;
}

export function SexualPreferences({ sexual }: SexualPreferencesProps) {
  if (!sexual || !sexual.enabled) return null;

  const preferences = [
    { label: "Favored Position", value: sexual.favored_position },
    { label: "Anal Position", value: sexual.anal_position },
    { label: "Size", value: sexual.dick_size },
    { label: "Dirty Sex", value: sexual.dirty_sex },
    { label: "SM", value: sexual.sm },
    { label: "Fisting", value: sexual.fisting },
    { label: "Safer Sex", value: sexual.safer_sex },
    { label: "Kissing", value: sexual.kissing },
    { label: "Oral", value: sexual.oral },
  ].filter(item => item.value && item.value !== "N/A");

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 sm:p-8">
      <h2 className="mb-6 font-headline text-xl font-bold text-on-surface">Sexual Preferences</h2>
      
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
      
      {sexual.fetish && sexual.fetish.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-outline">
            Fetishes
          </h3>
          <div className="flex flex-wrap gap-2">
            {sexual.fetish.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-primary-container/20 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
