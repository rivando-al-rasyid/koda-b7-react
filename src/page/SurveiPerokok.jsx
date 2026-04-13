import { useSelector, useDispatch } from "react-redux";
import { addSurvei, removeSurvei } from "../features/survei/slice";
import SurveiForm from "../components/SurveiForm";
import SurveiTable from "../components/SurveiTable";
import Footer from "../layout/Footer";

export default function SurveiPerokok() {
    const surveys = useSelector((state) => state.survei.items);
    const dispatch = useDispatch();

    const handleAddSurvei = (survei) => {
        dispatch(addSurvei(survei));
    };

    const handleDeleteSurvei = (id) => {
        dispatch(removeSurvei(id));
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📝 Survei Perokok
                    </h2>
                </div>

                <SurveiForm onAddSurvei={handleAddSurvei} />

                <div className="border-t-4 border-zinc-900">
                    <SurveiTable
                        surveys={surveys}
                        onDelete={handleDeleteSurvei}
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}
