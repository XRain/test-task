import type { HunqzPersonal } from "@repo/shared";
import { CollapsibleSection } from "./CollapsibleSection";

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
    <div className="space-y-4 sm:space-y-0 sm:rounded-2xl sm:bg-surface sm:p-8 sm:shadow-sm sm:ring-1 sm:ring-outline/20">
      {personal.profile_text && (
        <CollapsibleSection title="About Me" defaultOpen={true}>
          <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap md:break-all">
            {personal.profile_text}
          </p>
          <div className="mt-6 sm:hidden border-t border-outline/10" />
        </CollapsibleSection>
      )}

      <CollapsibleSection title="Personal Details">
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
      </CollapsibleSection>
    </div>
  );
}
