#include <iostream>
#include <vector>
#include <time.h>
#include <string>

using namespace std;

vector<int> getSubstringRK(wstring text, wstring pattern);

bool compareText(wstring text, int index, wstring pattern, int patternLength);

vector<int> getSubstringKMP(wstring text, wstring pattern);

void getBorders(wstring pattern, int* lps);

int main() {


    wstring text(
            L"На краю дороги стоял дуб. Вероятно, в десять раз старше берез, составлявших лес, он был в десять раз толще, и в два раза выше каждой березы. Это был огромный, в два обхвата дуб, с обломанными, давно, видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюже, несимметрично растопыренными корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами. Только он один не хотел подчиняться обаянию весны и не хотел видеть ни весны, ни солнца. «Весна, и любовь, и счастие! — как будто говорил этот дуб. — И как не надоест вам все один и тот же глупый бессмысленный обман! Все одно и то же, и все обман! Нет ни весны, ни солнца, ни счастья. Вон смотрите, сидят задавленные мертвые ели, всегда одинакие, и вон и я растопырил свои обломанные, ободранные пальцы, где ни выросли они — из спины, из боков. Как выросли — так и стою, и не верю вашим надеждам и обманам». Князь Андрей несколько раз оглянулся на этот дуб, проезжая по лесу, как будто он чего-то ждал от него. Цветы и трава были и под дубом, но он все так же, хмурясь, неподвижно, уродливо и упорно, стоял посреди их. «Да, он прав, тысячу раз прав этот дуб, — думал князь Андрей, — пускай другие, молодые, вновь поддаются на этот обман, а мы знаем жизнь, — наша жизнь кончена! » Целый новый ряд мыслей безнадежных, но грустно-приятных в связи с этим дубом возник в душе князя Андрея. Во время этого путешествия он как будто вновь обдумал всю свою жизнь и пришел к тому же прежнему, успокоительному и безнадежному, заключению, что ему начинать ничего было не надо, что он должен доживать свою жизнь, не делая зла, не тревожась и ничего не желая.");
    wstring pattern(L"обломанн");

    const int ITERATIONS = 100000;

    auto start = clock();
    for(auto i = 0; i < ITERATIONS; i++) {
        auto resultKMP = getSubstringKMP(text, pattern);
    }
    auto middle = clock();

    for(auto i = 0; i < ITERATIONS; i++) {
        auto resultRK = getSubstringRK(text, pattern);
    }
    auto end = clock();

    cout << "KMP: " << 1000.0 / (((double) (middle - start)) / ITERATIONS) << endl;
    cout << "RK: " << 1000.0 / (((double) (end - middle)) / ITERATIONS) << endl;

    return 0;
}


vector<int> getSubstringRK(wstring text, wstring pattern) {
    vector<int> result;

    auto alphabetSize = 1024;
    auto mod = 2473;

    int N = text.length();
    int M = pattern.length();

    auto patternHash = pattern[0] % mod;
    auto textHash = text[0] % mod;

    auto firstIndexHash = 1;

    for (auto i = 1; i < M; i++) {
        patternHash = (patternHash * alphabetSize + pattern[i]) % mod;
        textHash = (textHash * alphabetSize + text[i]) % mod;
        firstIndexHash = (firstIndexHash * alphabetSize) % mod;
    }

    for (auto i = 0; i <= N - M; i++) {
        if (patternHash == textHash && compareText(text, i, pattern, M)) {
            result.push_back(i);
        }

        if (i == N - M) break;

        textHash -= (text[i] * firstIndexHash) % mod;
        textHash += mod;
        textHash *= alphabetSize;
        textHash += text[i + M];
        textHash %= mod;
    }

    return result;
}

bool compareText(wstring text, int index, wstring pattern, int patternLength) {
    for (auto i = 0; i < patternLength; i++) {
        if (pattern[i] != text[index + i]) {
            return false;
        }
    }

    return true;
}

vector<int> getSubstringKMP(wstring text, wstring pattern)
{
    vector<int> result;

    int lps[pattern.length()];

    getBorders(pattern, lps);

    int i = 0;
    int j = 0;
    while (i < text.length()) {
        if (pattern[j] == text[i]) {
            j++;
            i++;
        }

        if (j == pattern.length()) {
            result.push_back(i - j);
            j = lps[j - 1];
        }
        else if (i < text.length() && pattern[j] != text[i]) {
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }

    return result;
}

void getBorders(wstring pattern, int* lps)
{
    int len = 0;

    lps[0] = 0;

    int i = 1;
    while (i < pattern.length()) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        }
        else
        {
            if (len != 0) {
                len = lps[len - 1];
            }
            else
            {
                lps[i] = 0;
                i++;
            }
        }
    }
}