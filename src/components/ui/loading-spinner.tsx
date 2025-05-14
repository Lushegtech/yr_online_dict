import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Circle */}
      <div
        className={cn(
          "absolute border-2 rounded-full animate-[spin_3s_linear_infinite]",
          sizeClasses[size],
          "border-t-yoruba-coral border-r-yoruba-gold border-b-yoruba-green border-l-yoruba-indigo",
          className
        )}
      />
      
      {/* Inner Circle */}
      <div
        className={cn(
          "absolute border-2 rounded-full animate-[spin_2s_linear_infinite_reverse]",
          size === "sm" ? "w-2 h-2" : size === "md" ? "w-4 h-4" : "w-6 h-6",
          "border-t-yoruba-gold border-r-yoruba-green border-b-yoruba-indigo border-l-yoruba-coral"
        )}
      />

      {/* Center Dot */}
      <div
        className={cn(
          "absolute rounded-full bg-yoruba-coral animate-pulse",
          size === "sm" ? "w-1 h-1" : size === "md" ? "w-2 h-2" : "w-3 h-3"
        )}
      />
    </div>
  )
} 