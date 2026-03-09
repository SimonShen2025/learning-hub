import { notFound } from "next/navigation";
import { getCourseDetail, getSections, getLectures } from "@/lib/content";
import { SectionList } from "@/components/section-list";
import { CourseInfo } from "@/components/course-info";
import { Breadcrumb } from "@/components/breadcrumb";

interface Props {
  params: Promise<{ courseSlug: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params;
  const course = getCourseDetail(courseSlug);
  if (!course) notFound();

  const sections = getSections(courseSlug);
  const sectionsWithLectures = sections.map((section) => ({
    ...section,
    lectures: getLectures(courseSlug, section.slug).map((l) => ({
      slug: l.slug,
      title: l.title,
      lectureId: l.lectureId,
      date: l.date,
      tags: l.tags,
      important: l.important,
    })),
  }));

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: course.title },
        ]}
      />

      <CourseInfo course={course} />

      {sections.length === 0 ? (
        <div className="rounded-xl border-dashed border-2 p-8 text-center">
          <p className="text-muted-foreground text-sm">
            No sections yet. Use the summarise command to add lecture notes.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-4">
            Sections ({sections.length})
          </h2>
          <SectionList courseSlug={courseSlug} sections={sectionsWithLectures} />
        </>
      )}
    </div>
  );
}
