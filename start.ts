import { Suite } from 'benchmark';
import { getSubstringKMP } from './kmp/kmp-search';
import { getSubstringNaive } from './naive/naive';
import { getSubstringNotSoNaive } from './not-so-naive/not-so-naive';
import { getAllCounters } from './counter';

function dnaMeasures(): void {
    const text = 'GTAGTGTGTCTACGTCTTTCTTTGACAGTACCGCGTAATTTGCAGTGCTATAAATCATCTCTAACGCTGGCTGTGCACCGCCACCGTAGTGTGTCTACGTCTTTCTTTGACAGTACCGCGTAATTTGCAGTGCTATAAATCATCTCTAACGCTGGCTGTGCACCGCCACCCCAGCGGGAAGCCCATTTTTCCACTACCTCTGTTCCTGGTATAGTGCACTATATCGCCCGTAACCGATGTCTCGCCAAGATTTTGGCAACTTCCCGAGCAATCAGGTGGAGTCAGACCGATAGCTCTAATGGTTTACGTGAATGCATGGCGCCTATAGCTATGGGCAGAAACCAGCGGGAAGCCCATTTTTCCACTACCTCTGTTCCTGGTATAGTGCACTATATCGCCCGGTAGTGTGTCTACGTCTTTCTTTGACAGTACCGCGTAATTTGCAGTGCTATAAATCATCTCTAACGCTGGCTGTGCACCGCCACCCCAGCGGGAAGCCCATTTTTCCACTACCTCTGTTCCTGGTATAGTGCACTATATCGCCCGTAACCGATGTCTCGCCAAGATTTTGGCAACTTCCCGAGCAATCAGGTGGAGTCAGACCGATAGCTCTAATGGTTTACGTGAATGCATGGCGCCTATAGCTATGGGCAGAAATAACCGATGTCTCGCCAAGATTTTGGCAACGTAGTGTGTCTACGTCTTTCTTTGACAGTACCGCGTAATTTGCAGTGCTATAAATCATCTCTAACGCTGGCTGTGCACCGCCACCCCAGCGGGAAGCCCATTTTTCCACTACCTCTGTTCCTGGTATAGTGCACTATATCGCCCGTAACCGATGTCTCGCCAAGATTTTGGCAACTTCCCGAGCAATCAGGTGGAGTCAGACCGATAGCTCTAATGGTTTACGTGAATGCATGGCGCCTATAGCTATGGGCAGAAATTCCCGAGCAATCAGGTGGAGTCAGACCGATAGCTCTAATGGTTTACGTGAATGCATGGCGCCTATAGCTATGGGCAGAAA';

    const pattern = 'GTAGTGTGTCTACGTCTTTCTTTGACAGTACCGCGTA';

    const suite = new Suite('DNA search');

    suite
        .add('getSubstringNaive', () => getSubstringNaive(text, pattern))
        .add('getSubstringKMP', () => getSubstringKMP(text, pattern))
        .add('getSubstringNotSoNaive', () => getSubstringNotSoNaive(text, pattern))
        .on('cycle', (event: any) => console.log(String(event.target)))


    suite.run();
}

function peaceAndWarMeasures(): void {
    const text = 'На краю дороги стоял дуб. Вероятно, в десять раз старше берез, составлявших лес, он был в десять раз толще, и в два раза выше каждой березы. Это был огромный, в два обхвата дуб, с обломанными, давно, видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюже, несимметрично растопыренными корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами. Только он один не хотел подчиняться обаянию весны и не хотел видеть ни весны, ни солнца. «Весна, и любовь, и счастие! — как будто говорил этот дуб. — И как не надоест вам все один и тот же глупый бессмысленный обман! Все одно и то же, и все обман! Нет ни весны, ни солнца, ни счастья. Вон смотрите, сидят задавленные мертвые ели, всегда одинакие, и вон и я растопырил свои обломанные, ободранные пальцы, где ни выросли они — из спины, из боков. Как выросли — так и стою, и не верю вашим надеждам и обманам». Князь Андрей несколько раз оглянулся на этот дуб, проезжая по лесу, как будто он чего-то ждал от него. Цветы и трава были и под дубом, но он все так же, хмурясь, неподвижно, уродливо и упорно, стоял посреди их. «Да, он прав, тысячу раз прав этот дуб, — думал князь Андрей, — пускай другие, молодые, вновь поддаются на этот обман, а мы знаем жизнь, — наша жизнь кончена! » Целый новый ряд мыслей безнадежных, но грустно-приятных в связи с этим дубом возник в душе князя Андрея. Во время этого путешествия он как будто вновь обдумал всю свою жизнь и пришел к тому же прежнему, успокоительному и безнадежному, заключению, что ему начинать ничего было не надо, что он должен доживать свою жизнь, не делая зла, не тревожась и ничего не желая.';

    // const pattern = 'дуб';
    // const pattern = 'Андрей';
    const pattern = 'обломанн';

    const suite = new Suite('Peace and war search');

    suite
        .add('getSubstringNaive', () => getSubstringNaive(text, pattern))
        .add('getSubstringKMP', () => getSubstringKMP(text, pattern))
        .add('getSubstringNotSoNaive', () => getSubstringNotSoNaive(text, pattern))
        .on('cycle', (event: any) => console.log(String(event.target)))


    suite.run();
}

// dnaMeasures();
peaceAndWarMeasures();

// getAllCounters().forEach(pair => console.log(pair[0], ':', pair[1].count));
