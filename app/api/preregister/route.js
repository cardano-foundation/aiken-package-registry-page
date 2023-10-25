import { NextResponse } from "next/server"

async function postForm(form, portalId, formGuid) {
  const requestUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

  const response = await fetch(`${requestUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formFieldsToHSJSON(form)),
    next: { revalidate: 300 },
  })

  return await response.json()
}

function formFieldsToHSJSON(form) {
  let fieldArray = []

  for (const property of Object.keys(form)) {
    fieldArray.push({
      "name": property,
      "value": form[property]
    })
  }

  return {fields: fieldArray}
}

export async function POST(request) {
  const { searchParams } = new URL(request.url)
  const portalId = searchParams.get('portalId')
  const formGuid = searchParams.get('formGuid')

  const form = await request.json()

  const formSubmission = await postForm(form, portalId, formGuid)

  return NextResponse.json(formSubmission)
}
