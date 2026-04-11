import { useContext, useState } from "react";
import UserContext from "../context/user/context";

function Profile() {
    const { isLogin, setIsLogin, user, setUser } = useContext(UserContext);

    // Local state untuk handle perubahan input sebelum di-save
    const [editMode, setEditMode] = useState(false);
    const [tempData, setTempData] = useState({ ...user });

    if (!isLogin) {
        return (
            <div className="text-center mt-10 font-semibold text-red-500">
                Akses Ditolak. Silahkan Login.
            </div>
        );
    }

    const handleUpdate = () => {
        setUser(tempData);
        setEditMode(false);
        alert("Profil diperbarui!");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />

                {editMode ? (
                    <div className="w-full flex flex-col gap-3">
                        <label className="text-sm font-medium">Username:</label>
                        <input
                            className="border p-2 rounded"
                            value={tempData.username}
                            onChange={(e) =>
                                setTempData({
                                    ...tempData,
                                    username: e.target.value,
                                })
                            }
                        />
                        <label className="text-sm font-medium">
                            Link Foto Profil:
                        </label>
                        <input
                            className="border p-2 rounded"
                            value={tempData.profilePic}
                            onChange={(e) =>
                                setTempData({
                                    ...tempData,
                                    profilePic: e.target.value,
                                })
                            }
                        />
                        <label className="text-sm font-medium">Email:</label>
                        <input
                            className="border p-2 rounded"
                            value={tempData.email}
                            onChange={(e) =>
                                setTempData({
                                    ...tempData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <label className="text-sm font-medium">
                            Change Password:
                        </label>
                        <input
                            className="text-sm font-medium"
                            type="password"
                            value={tempData.password}
                            onChange={(e) =>
                                setTempData({
                                    ...tempData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={handleUpdate}
                                className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                Simpan
                            </button>
                            <button
                                onClick={() => setEditMode(false)}
                                className="flex-1 bg-gray-300 p-2 rounded"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-bold">{user.username}</h2>
                        <p className="text-gray-500 text-sm mb-4">User Aktif</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setEditMode(true)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Edit Profil
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
