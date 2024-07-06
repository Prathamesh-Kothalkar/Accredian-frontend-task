
import Refer from "./Refer";

export default function HeroPage() {
    return (
        <>
            <div className="flex justify-center px-6 mb-9">
                <div className="rounded-xl  shadow-slate-300 mt-20 w-full max-w-5xl p-6 mb-0 ml-auto mr-auto bg-blue-50 grid lg:grid-cols-2 gap-6 shadow-lg">
                    <div className="flex flex-col justify-center p-4 space-y-4">
                        <h1 className="px-6 text-6xl font-bold text-black">
                            Let's Refer & Earn
                        </h1>
                        <p className="px-6 text-xl text-gray-700">
                            Get a chance to win up to <span className="font-semibold text-2xl text-blue-500">Rs. 15000</span>
                        </p>
                        <div className="px-6 self-start">
                            <Refer/>
                        </div>
                        
                    </div>
                    <div className="flex justify-center items-center p-4">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg__"
                            alt="Refer & Earn"
                            className="max-w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
