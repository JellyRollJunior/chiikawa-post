import {
    RegExpMatcher,
    TextCensor,
    englishDataset,
    englishRecommendedTransformers,
} from 'obscenity';

const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
})
// Replace profanity with *'s
const asteriskStrategy = (profanity) => '*'.repeat(profanity.matchLength);
const textCensor = new TextCensor().setStrategy(asteriskStrategy);

export { textCensor, matcher }