export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <table className="text-lg">
          <thead>
            <th className="text-left">Character</th>
            <th className="pl-4">Rendered as</th>
          </thead>
          <tr className="border-b border-gray-200">
            <td>right arrow</td>
            <td className="pl-4">&rarr;</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>
              right arrow
              <small className="block text-xs text-gray-500">
                with `font-family: &apos;Geist&apos;` manually applied
              </small>
            </td>
            <td className="pl-4 font-[Geist]">&rarr;</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>right arrow ligature </td>
            <td className="pl-4">-&gt;</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>left arrow</td>
            <td className="pl-4">&larr;</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>
              left arrow
              <small className="block text-xs text-gray-500">
                with `font-family: &apos;Geist&apos;` manually applied
              </small>
            </td>
            <td className="pl-4 font-[Geist]">&larr;</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>left arrow ligature</td>
            <td className="pl-4">&lt;-</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>triangle (up)</td>
            <td className="pl-4">▲</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>
              triangle (up)
              <small className="block text-xs text-gray-500">
                with `font-family: &apos;Geist&apos;` manually applied
              </small>
            </td>
            <td className="pl-4 font-[Geist]">▲</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td>triangle (down)</td>
            <td className="pl-4">▼</td>
          </tr>
          <tr>
            <td>
              triangle (down)
              <small className="block text-xs text-gray-500">
                with `font-family: &apos;Geist&apos;` manually applied
              </small>
            </td>
            <td className="pl-4 font-[Geist]">▼</td>
          </tr>
        </table>
      </main>
    </div>
  );
}
