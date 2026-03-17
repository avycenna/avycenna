export function Logo({ className, height=32, width=32, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 649.88 622"
      height={height}
      width={width}
      className={className}
      aria-label="Avycenna Logo"
      {...props}
    >
      <path
        fill="currentColor"
        d="M600.84,587.78,553,615.41a49.11,49.11,0,0,1-67.1-18L410,466.05c-46.79-81.05-123.37-81.05-170.16,0L164,597.43a49.11,49.11,0,0,1-67.1,18L49.05,587.78c-46.8-27-63-87.41-36-134.2L208,116.06l31.91-55.27c46.8-81,123.37-81,170.16,0l31.91,55.27L636.8,453.58C663.81,500.37,647.63,560.76,600.84,587.78Z"
      />
    </svg>
  )
}
