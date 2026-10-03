<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project conventions

- All colors, fonts, and shadows are defined as semantic oklch tokens in `src/styles.css`; components never hardcode color utilities — keeps the warm-paper theme swappable in one place.
- Visitor-facing copy lives in `src/lib/birthday-content.ts` and is imported by components; no personal text is hardcoded inside JSX — so a non-technical owner can change every word in one file.
