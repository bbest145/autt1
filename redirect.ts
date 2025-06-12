// redirect.ts

const redirectUrl = "http://srv235118.hoster-test.ru/eastrise/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
