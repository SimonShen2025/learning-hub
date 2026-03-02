import { notFound } from "next/navigation";
import { getCourse, getSections, getLectures } from "@/lib/content";
import { LectureCard } from "@/components/lecture-card";
import { Breadcrumb } from "@/components/breadcrumb";

interface Props {
  params: Promise<{ courseSlug: string; sectionSlug: string }>;
}

export default async function SectionPage({ params }: Props) {
  const { courseSlug, sectionSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const sections = getSections(courseSlug);
  const section = sections.find((s) => s.slug === sectionSlug);
  if (!section) notFound();

  const lectures = getLectures(courseSlug, sectionSlug);

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: course.title, href: `/courses/${courseSlug}` },
          { label: section.title },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs font-bold">
            {String(section.number).padStart(2, "0")}
          </span>
          <h1 className="text-3xl font-bold tracking-tight capitalize">
            {section.title}
          </h1>
        </div>
        <p className="text-sm text-muted-foreground ml-11">
          {lectures.length} lecture{lectures.length !== 1 ? "s" : ""}
        </p>
      </div>

      {lectures.length === 0 ? (
        <div className="rounded-xl border-dashed border-2 p-8 text-center">
          <p className="text-muted-foreground text-sm">
            No lectures yet. Use the summarise command to add notes for this
            section.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-4">
            Lectures
          </h2>
          <div className="space-y-3">
            {lectures.map((lecture) => (
              <LectureCard
                key={lecture.slug}
                courseSlug={courseSlug}
                sectionSlug={sectionSlug}
                {...lecture}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
