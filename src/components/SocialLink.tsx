'use client'

import Link from "next/link";
import { toast } from "react-hot-toast";
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    SkypeIcon
} from '@/components/SocialIcons'

function SocialLink({ icon: Icon, connection, ...props }) {
    const renderIcon = () => {
        const iconClassname = "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"

        switch (connection.name) {
            case 'Github':
                return <GitHubIcon className={iconClassname} />
            case 'Linkedin':
                return <LinkedInIcon className={iconClassname} />
            case 'Skype':
                return <SkypeIcon className={iconClassname} />
            case 'Twitter':
                return <TwitterIcon className={iconClassname} />
            case 'Instagram':
                return <InstagramIcon className={iconClassname} />
            default:
                return null
        }
    }

    if (!props.href) {
        return (
            <div className='group -m-1 p-1 hover:cursor-pointer' {...props} onClick={() => {
                toast.success(`${connection.name}'s id copied to clipboard`);
                navigator.clipboard.writeText(connection.id)
            }}>
                {renderIcon()}
            </div>
        )
    }

    return (
        <Link href={props.href || '/'} className="group -m-1 p-1" target="_blank" {...props}>
            {renderIcon()}
        </Link>
    )
}

export default SocialLink