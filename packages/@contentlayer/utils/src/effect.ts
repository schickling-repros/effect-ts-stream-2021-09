import * as Chunk from '@effect-ts/core/Collections/Immutable/Chunk'
import * as S from '@effect-ts/core/Effect/Experimental/Stream'

export const streamStartWith =
  <R, E, A>(...values: A[]) =>
  <A1>(stream: S.Stream<R, E, A | A1>) =>
    S.merge_(stream, S.fromChunk(Chunk.from(values)))
