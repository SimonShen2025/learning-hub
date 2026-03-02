import { notFound } from "next/navigation";
import { getCourse, getSections } from "@/lib/content";
import { SectionList } from "@/components/section-list";
import { Breadcrumb } from "@/components/breadcrumb";

interface Props {
  params: Promise<{ courseSlug: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const sections = getSections(courseSlug);

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: course.title },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-0 capitalize">
            {course.platform}
          </span>
        </div>
        {course.url && (
          <a
            href={course.url}
            className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on {course.platform}
          </a>
        )}
      </div>

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
          <SectionList courseSlug={courseSlug} sections={sections} />
        </>
      )}
    </div>
  );
}
