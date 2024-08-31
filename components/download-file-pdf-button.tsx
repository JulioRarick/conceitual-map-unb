import { FileCheck } from 'lucide-react'
import { ComponentProps } from 'react'

interface DownloadFilePdfButtonProps extends ComponentProps<'a'> {
  downloadUrl: string
  fileName: string
}

export function DownloadFilePdfButton({
  fileName,
  downloadUrl,
}: DownloadFilePdfButtonProps) {
  return (
    <a
      href={downloadUrl}
      download={fileName}
      className="m-4 flex items-center justify-center gap-1 rounded-lg bg-cyan-800 p-2 font-semibold tracking-tight text-stone-50 hover:bg-cyan-700"
    >
      <FileCheck className="h-5 w-5" />
      Baixar PDF
    </a>
  )
}
