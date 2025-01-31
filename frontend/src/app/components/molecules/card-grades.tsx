import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function UpdateGrades() {
  return (
    <Card className="h-[404px] w-[332px] items-center bg-[#FCFCFC] shadow-md shadow-slate-300">
      <CardHeader className="mt-2">
        <CardTitle className="">Subir Notas</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <form>
          <div className="mt-3">
            <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

          </div>
          <div className="mt-3">
            <label htmlFor="number" className="">
              Note
            </label>
            <Input className="mt-1" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="submit"
          className="w-[78px] border bg-[#FCFCFC] text-black hover:bg-red-400"
        >
          Delete
        </Button>
        <Button type="submit" className="w-[78px]">
          Update
        </Button>
      </CardFooter>
    </Card>
  )
}
