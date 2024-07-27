import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'
import Link from 'next/link'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export function SocialMediaComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="m-10 flex items-center justify-center gap-6"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/JulioRarick/concept-map-unb"
              target="_blank"
              className="flex items-center justify-center rounded-md bg-cyan-600 p-2 hover:bg-cyan-500"
            >
              <GitHubLogoIcon className="h-8 w-8 text-white" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Repositório do projeto</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.instagram.com/rarickn/"
              target="_blank"
              className="flex items-center justify-center rounded-md bg-cyan-600 p-2 hover:bg-cyan-500"
            >
              <InstagramLogoIcon className="h-8 w-8 text-white" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Me siga no Instagram</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.juliorarick.tech/"
              target="_blank"
              className="flex items-center justify-center gap-1 rounded-md bg-stone-200 p-2 text-xl font-bold text-foreground hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
            >
              <Link2 className="h-9 w-9 text-emerald-600" /> rarick
            </Link>
          </TooltipTrigger>
          <TooltipContent>Veja meu portfólio</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  )
}
