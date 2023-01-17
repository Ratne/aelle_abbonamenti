import Image from "next/image"

interface IconProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    icon: string
    size?: string
    tintColor?: string
}

export const IconSVG = ({
                            icon,
                            size = '32px',
                            tintColor,
                            ...rest
                        }: IconProps) => {
    const image = icon ? require(`./../../assets/icons/SVG/${icon}.svg`) : ''

    return (
        <span {...rest}>
      {tintColor ? (
          <div
              className="icon icon-svg-mask"
              style={{
                  maskImage: `url(${image.default.src})`,
                  WebkitMaskImage: `url(${image.default.src})`,
                  backgroundColor: tintColor,
                  width: size,
                  height: size,
              }}
          ></div>
      ) : (
          <Image className="icon" src={image} width={size} height={size}/>
      )}
    </span>
    )
}
