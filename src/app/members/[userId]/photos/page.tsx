import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react'

import { getMemberPhotosByUserId } from '@/app/actions/memberActions'

export default async function PhotosPage({
  params,
}: {
  params: { userId: string }
}) {
  const photos = await getMemberPhotosByUserId(params.userId)
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-teal-500">
        Fotos
      </CardHeader>
      <Divider />
      <CardBody className="text-slate-500">
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => (
              <Image
                key={photo.id}
                width={170}
                height={170}
                src={photo.url}
                alt="Image of member"
                className="aspect-square object-cover"
              />
            ))}
        </div>
      </CardBody>
    </>
  )
}
