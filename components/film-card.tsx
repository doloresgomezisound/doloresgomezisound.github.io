import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FilmCardProps {
  title: string
  year: string
  type: string
  role: string
  posterUrl: string
}

export default function FilmCard({ title, year, type, role, posterUrl }: FilmCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/4 md:w-1/6">
            <Image
              src={posterUrl || "/placeholder.svg"}
              alt={`${title} poster`}
              width={200}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 sm:w-3/4 md:w-5/6">
            <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300">{title}</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Year</p>
                <p className="text-slate-700 dark:text-slate-300">{year}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Type</p>
                <p className="text-slate-700 dark:text-slate-300">{type}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
                <p className="text-slate-700 dark:text-slate-300">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
