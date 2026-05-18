import type { HunqzPersonal } from "@repo/shared";

interface PersonalInfoProps {
  personal?: HunqzPersonal;
}

export function PersonalInfo({ personal }: PersonalInfoProps) {
  if (!personal) return null;

  const infoItems = [
    { label: "Height", value: personal.height ? `${personal.height} cm` : null, icon: "straighten" },
    { label: "Weight", value: personal.weight ? `${personal.weight} kg` : null, icon: "weight" },
    { label: "Build", value: personal.body_type, icon: "fitness_center" },
    { label: "Eyes", value: personal.eye_color, icon: "visibility" },
    { label: "Facial Hair", value: personal.beard, icon: "face" },
    { label: "Body Hair", value: personal.body_hair, icon: "content_cut" },
    { label: "Orientation", value: personal.orientation, icon: "explore" },
    { label: "Smoker", value: personal.smoker, icon: "smoke_free" },
  ].filter(item => item.value);

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 sm:p-8">
      <h2 className="mb-6 flex items-center font-headline text-xl font-bold text-on-surface">
        Personal Info
      </h2>
      
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4">
        {infoItems.map((item, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface-variant/50 text-on-surface-variant">
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-outline">{item.label}</p>
              <p className="mt-0.5 text-base font-semibold text-on-surface">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {personal.profile_text && (
        <div className="mt-8 pt-8 border-t border-outline/10">
          <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">
            {personal.profile_text}
          </p>
        </div>
      )}
    </div>
  );
}
