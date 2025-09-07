import { useRef } from "react"
import { GraduationCap } from "lucide-react"
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogClose,
} from "./ui/dialog"

// Example education data; replace with your own or fetch dynamically
const education = [
	{
		college: "Coimbatore Institute of Technology - CIT",
		location: "Coimbatore, India",
		years: "2021 – Present",
		Course: "MSc Decision and Computing Sciences",
		gpa: "CGPA: 7.9/10",
	},
	// Add more entries as needed
]
export default function EducationDialog() {
	const triggerRef = useRef<HTMLButtonElement>(null)
	return (
		<Dialog aria-modal="true">
			<DialogTrigger asChild>
				<button
					ref={triggerRef}
					className="group outline-none border border-border/60 rounded-full p-2 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-180 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 bg-background"
					aria-label="Education"
				>
					<GraduationCap className="h-4 w-4" aria-hidden="true" />
				</button>
			</DialogTrigger>
			<DialogContent
				aria-labelledby="education-title"
				className="max-w-[640px] w-[90vw] sm:w-full max-h-[80vh] p-6 sm:p-8 rounded-xl border border-border bg-card shadow-lg text-card-foreground animate-in fade-in-0 zoom-in-95 flex flex-col"
				style={{ fontFamily: 'inherit' }}
			>
				{/* DialogTitle must be a direct child for accessibility */}
				<DialogTitle
					id="education-title"
					className="text-xl sm:text-2xl font-semibold tracking-tight mb-2"
					style={{ fontFamily: 'inherit' }}
				>
					Education
				</DialogTitle>
				{/* Scrollable body */}
				<div className="overflow-y-auto flex-1 pr-1" style={{paddingRight: '2px'}}>
					<div className="flex flex-col gap-3">
						{education.map((edu, i) => (
							<div key={i} className="flex flex-col gap-1 pb-2">
								<span className="font-bold text-base sm:text-lg text-foreground" style={{ fontFamily: 'inherit', marginTop: 0 }}>{edu.college}</span>
								<div className="flex flex-wrap gap-2 text-sm">
									<span className="text-muted-foreground">{edu.location}</span>
									<span className="text-muted-foreground">{edu.years}</span>
								</div>
								{/* Display course information */}
								<span className="text-sm text-foreground" style={{ fontFamily: 'inherit' }}>{edu.Course}</span>
								<span className="font-semibold text-primary text-sm mt-1">{edu.gpa}</span>
								{i < education.length - 1 && (
									<div className="h-px w-full bg-border/60 my-2" />
								)}
							</div>
						))}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
