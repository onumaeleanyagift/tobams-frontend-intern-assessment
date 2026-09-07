type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  text: string;
};

export default function TestimonialCard({
  name,
  role,
  image,
  text,
}: TestimonialCardProps) {
  return (
    <article className="min-w-full rounded-xl border-l-2 border-(--secondary) bg-(--white) p-5 md:min-w-[380px] lg:min-w-[390px]">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={`${name} profile`}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <h3 className="text-[14px] font-semibold text-(--main-text) md:text-[16px]">
            {name}
          </h3>

          <p className="text-[12px] text-(--Subdued) md:text-[14px]">{role}</p>
        </div>
      </div>

      <p className="mt-6 text-[14px] text-(--main-text) md:text-[18px]">
        {text}
      </p>
    </article>
  );
}
